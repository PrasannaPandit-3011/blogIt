import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const NUM_USERS = 5
const BLOGS_PER_USER = 4
let useSeededRNG = true

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed')
  let seedDate

  if (randomSeedString) {
    seedDate = new Date(randomSeedString)
  } else {
    seedDate = new Date()
    randomSeedString = seedDate.toISOString()
    localStorage.setItem('randomTimestampSeed', randomSeedString)
  }

  faker.seed(seedDate.getTime())
}

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 1000

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


export const db = factory({
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    name: String,
    email: String,
    password: String,
    blogs: manyOf('blog')
  },
  blog: {
    id: primaryKey(String),
    author: oneOf('user'),
    title: String,
    content: String,
    type: String,
    likes: Number,
    comments: [Object],
    createdAt: String,
    updatedAt: String,
  }
})

const comments = ["nicely explained", "good work", "some room for improvements", "this piece was very informative", "the content is really good"];

const blogType = ["Tech", "Food", "Social", "Current_Event"];

const createUserData = () => {

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({
      firstName,
      lastName
    }),
    password: `${firstName}@${lastName}`,
    blogs: []
  }
}

const createBlogData = user => {
  return {
    id: faker.string.uuid(),
    author: user,
    title: faker.lorem.sentence(7),
    content: faker.lorem.paragraphs(10),
    type: faker.helpers.arrayElement(blogType),
    likes: faker.number.int({ min: 0, max: 1000 }),
    comments: faker.helpers.arrayElements(comments, { min: 1, max: 5 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  }
}

// creating initial dummy data
for (let i = 0; i < NUM_USERS; i++) {
  const user = db.user.create(createUserData())
  for (let j = 0; j < BLOGS_PER_USER; j++) {
    const newBlog = createBlogData(user)
    db.blog.create(newBlog)
  }
}
db.user.create({
  id: faker.string.uuid(),
  firstName: 'Prasanna',
  lastName: 'Pandit',
  name: `Prasanna Pandit`,
  email: 'prasanna@gmail.com',
  password: `Prasanna@1234`,
})


export const handlers = [
  http.post('/api/login', async function ({ request }) {
    const { email, password } = await request.json()
    const user = db.user.findFirst({
      where: {
        email: {
          equals: email
        },
        password: {
          equals: password
        }
      }
    })
    await delay(ARTIFICIAL_DELAY_MS)
    if (user) {
      return HttpResponse.json(
        {
          message: 'Logged in successfully!',
          user: user
        },
        {
          status: 200
        }
      )
    }
    return HttpResponse.json(
      { error: 'You are not authorized' },
      {
        status: 401
      }
    )
  }),
  http.post('/api/signup', async function ({ request }) {
    const body = await request.json()
    const userExists = db.user.findFirst({
      where: {
        email: {
          equals: body.email
        }
      }
    })
    await delay(ARTIFICIAL_DELAY_MS)
    if (userExists) {
      return HttpResponse.json(
        { error: 'Email is already used!' },
        {
          status: 400
        }
      )
    }
    const user = db.user.create({ id: faker.string.uuid(), ...body })
    return HttpResponse.json(
      {
        message: 'Account created successfully!',
        user
      },
      {
        status: 200
      }
    )
  }),
  http.get('/api/blog', async function () {
    const blogs = db.blog.findMany({ where: {} })
    await delay(ARTIFICIAL_DELAY_MS)
    return HttpResponse.json({ blogs }, { status: 200 })
  }),
  http.post('/api/blog', async function ({ request }) {
    const details = await request.json();
    console.log(details)
    const user = db.user.findFirst({
      where: {
        id: {
          equals: details?.author?.id
        }
      }
    })
    const blog = db.blog.create({
      id: faker.string.uuid(),
      author: user,
      title: details.title,
      content: details.content,
      type: details.type,
      likes: 0,
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return HttpResponse.json({
      blog: blog,
      message: 'Blog created successfully!'
    })
  }),
  http.patch('/api/blog/:id', async function ({ params, request }) {
    const { id } = params;
    const body = await request.json();

    const blog = db.blog.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });

    await delay(ARTIFICIAL_DELAY_MS);

    return HttpResponse.json({
      blog,
      message: 'Blog edited successfully!',
    });
  }),
  http.delete('/api/blog/:id', async function ({ params }) {
    const { id } = params;

    db.blog.delete({
      where: {
        id: {
          equals: id,
        },
      },
    });

    await delay(ARTIFICIAL_DELAY_MS);

    return HttpResponse.json({
      message: 'Blog deleted successfully',
    });
  }),
  http.get('/api/blog/:id', async function ({ params }) {
    const { id } = params
    const blog = db.blog.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })
    await delay(ARTIFICIAL_DELAY_MS)

    return HttpResponse.json({
      blog: blog
    })
  }),
  http.get('/api/user/:id', async function ({ params }) {
    const { id } = params
    const user = db.user.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })
    if (user) {
      const blogs = db.blog.findMany({
        where: {
          author: {
            id: {
              equals: id
            }
          }
        }
      })
      return HttpResponse.json(
        {
          user: user,
          blogs: blogs
        },
        {
          status: 200
        })
    }
    await delay(ARTIFICIAL_DELAY_MS)

    return HttpResponse.json(
      { error: 'User not found!' },
      {
        status: 404
      }
    )
  }),
  http.get('/api/users', async function () {
    const users = db.user.getAll()
    return HttpResponse.json({ users })
  }),
  http.post('/api/comment', async function ({ request }) {
    const { comment, userId, blogId } = request.json();

    const blog = db.blog.findFirst({
      where: {
        id: {
          equals: blogId
        }
      }
    })
    const user = db.user.findFirst({
      where: {
        id: {
          equals: userId
        }
      }
    })
    const newComment = db.blog.update({
      where: {
        id: {
          equals: blogId
        }
      }, data: {
        comments: [...blog.comment, {
          comment,
          user
        }],
        updatedAt: new Date(),
      }
    })
    return HttpResponse.json({
      newComment
    })
  }),
  http.delete('/api/comment/:id', async function ({ params }) {
    const { id } = params;

    db.blog.update({
      where: {
        'comments.id': {
          equals: id,
        },
      },
      data: {
        comments: (comments) => comments.filter((comment) => comment.id !== id),
      },
    });

    await delay(ARTIFICIAL_DELAY_MS);

    return HttpResponse.json({
      message: 'Comment deleted successfully',
    });
  }),
  http.patch("/api/like/:id", async function ({ params, request }) {
    const { id } = params;
    const { likes } = await request.json();
    const newBlog = db.blog.update({
      where: {
        id: {
          equals: id
        }
      }, data: {
        likes: likes,
        updatedAt: new Date()
      }
    })
    return HttpResponse.json({
      newBlog
    })
  })
]

export const worker = setupWorker(...handlers)
// worker.start()
