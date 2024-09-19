import { Header, Prose } from 'ui';
import Item from './item';

export interface Project {
  preview: {
    imageUrl: string;
    videoUrl?: string;
  };
  title: string;
  period: string;
  organization: string;
  links: {
    title: string;
    url: string;
    isExternal: boolean;
  }[];
  description: string;
  pinned: boolean;
}
const projects: Project[] = [
  {
    preview: {
      imageUrl: 'https://hyukoo.one/kiwiy-daily-scrum-preview.png',
      videoUrl: 'https://hyukoo.one/kiwiy-daily-scrum-preview.mp4',
    },
    title: 'Kiwiy Daily Scrum',
    period: '2024 - Present',
    organization: 'Kiwiy',
    links: [
      {
        title: 'Website',
        url: 'https://dailyscrum.kiwiy.is/',
        isExternal: true,
      },
      {
        title: 'GitHub',
        url: 'https://github.com/kiwiy-is/dailyscrum',
        isExternal: true,
      },
    ],
    description:
      'Kiwiy Daily Scrum is a minimalist daily scrum board. It is developed on top of Next.js. It leverages React Server Components to handle most database querying and rendering on the server side. The project uses Supabase for PostgreSQL database management and real-time communication.',
    pinned: true,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/hyukoo-one-preview.png',
    },
    title: 'Hyukoo One',
    period: '2024',
    organization: 'Personal project',
    links: [
      {
        title: 'Website',
        url: 'https://hyukoo.one',
        isExternal: false,
      },
      {
        title: 'GitHub',
        url: 'https://github.com/hyukkwonepic/hyukoo-one',
        isExternal: true,
      },
    ],
    description: 'Personal website of Hyukoo Kwon.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/poc-mfe-todo-app-preview.png',
      videoUrl: 'https://hyukoo.one/poc-mfe-todo-app-preview.mp4',
    },
    title: 'PoC of Micro-Frontends Todo App',
    period: '2024',
    organization: 'Personal project',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/hyukkwonepic/poc-mfe-todo-app',
        isExternal: true,
      },
    ],
    description:
      'Proof of Concept project to validate building Micro-Frontends applications. Two React apps were developed separately and served on an app shell using Module Federation. The apps communicate between them using event emitters managed by the shell. Some components are federated to be shared over the network.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/mm-easy-preview.png',
      videoUrl: 'https://hyukoo.one/mm-easy-preview.mp4',
    },
    title: 'Mentorship: MM Easy',
    period: '2024',
    organization: 'Team Sparta Coding Club',
    links: [
      {
        title: 'Website',
        url: 'https://www.mmeasy.kr/',
        isExternal: true,
      },
      {
        title: 'GitHub',
        url: 'https://github.com/mm-easy/mm-easy',
        isExternal: true,
      },
    ],
    description:
      'Mentored the development of a Korean learning platform featuring quizzes and games. Guided students in structuring the architecture and selecting an efficient tech stack. The project uses Next.js for the frontend, Supabase for database management, TanStack Query for data fetching, and Jotai for state management.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/dooray-preview.png',
      videoUrl: 'https://hyukoo.one/dooray-preview.mp4',
    },
    title: 'Dooray Platform Renewal',
    period: '2021 - 2023',
    organization: 'NHN Dooray',
    links: [
      {
        title: 'Website',
        url: 'https://dooray.com/main/en/',
        isExternal: true,
      },
    ],
    description:
      'Dooray is a collaboration platform with task management, messaging, and video conferencing. This project rebuilt 8 services using React in a monorepo. It uses Redux for state management and Redux Saga for complex async actions. Micro-Frontends architecture was partially applied for separate deployment of services.',
    pinned: true,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/dooray-billing-preview.png',
      videoUrl: 'https://hyukoo.one/dooray-billing-preview.mp4',
    },
    title: 'Dooray Billing',
    period: '2023',
    organization: 'NHN Dooray',
    links: [
      {
        title: 'Website',
        url: 'https://dooray.com/main/en/',
        isExternal: true,
      },
    ],
    description:
      "Dooray's checkout and subscription management website. It is architected to be extendable as a renewed admin console. Developed with Next.js, it partially adopted React Server Components to ensure secure server-client communication. The UI was built using an internal UI kit, with Storybook employed for visual testing.",
    pinned: true,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/kakapoly-store-preview.png',
      videoUrl: 'https://hyukoo.one/kakapoly-store-preview.mp4',
    },
    title: 'Kakapoly Store',
    period: '2022',
    organization: 'Green Gables Studio',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/Green-Gables-Studio/kakapoly-store-hydrogen',
        isExternal: true,
      },
    ],
    description:
      "Kakapoly Store is an e-commece store primarily selling merchandise. It is built with Shopify's Hydrogen framework, leveriging React Server Components to querying and rendering page on the server side.",
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/protopie-website-preview.png',
      videoUrl: 'https://hyukoo.one/protopie-website-preview.mp4',
    },
    title: 'ProtoPie Website',
    period: '2020-2021',
    organization: 'ProtoPie',
    links: [
      {
        title: 'Website',
        url: 'https://www.protopie.io/',
        isExternal: true,
      },
    ],
    description:
      "ProtoPie is a no-code prototyping tool for mobile and web applications. This project rebuilt ProtoPie's official website to align with new branding and serve as a content hub. It is built with Next.js, the renewed site features documentation, pricing information, a blog, FAQs, use cases, and a product download page. Content is managed through a headless CMS. To improve performance, Static Site Generation was implemented, and CDN caching is used for optimized asset delivery.",
    pinned: true,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/protopie-billing-preview.png',
      videoUrl: 'https://hyukoo.one/protopie-billing-preview.mp4',
    },
    title: 'ProtoPie Billing',
    period: '2021',
    organization: 'ProtoPie',
    links: [
      {
        title: 'Website',
        url: 'https://checkout.protopie.io/',
        isExternal: true,
      },
    ],
    description:
      "ProtoPie's checkout and subscription management website. It is developed with Next.js, integrates Paddle for billing operations. The development process used Storybook and Chromatic for automated UI testing.",
    pinned: true,
  },

  {
    preview: {
      imageUrl: 'https://hyukoo.one/seoulbitz-preview.png',
    },
    title: 'Seoulbitz',
    period: '2020',
    organization: 'Seoulbitz Team',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/seoulbitz/seoulbitz-client',
        isExternal: true,
      },
    ],
    description:
      'Seoulbitz is an online magazine that introduces unique spots to visit in Seoul. It is developed with Next.js, with content managed by Sanity, the headless CMS, and deployed using Vercel. It features a map-like UI for location filtering, user-location-based filtering, and implemented technical SEO.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/microsalts-preview.png',
      videoUrl: 'https://hyukoo.one/microsalts-preview.mp4',
    },
    title: 'Microsalts',
    period: '2019',
    organization: 'Eatmapl; Eats My Pleasure',
    links: [
      {
        title: 'Website',
        url: 'https://www.microsalts.com/',
        isExternal: true,
      },
    ],
    description:
      'Microsalts is an e-commerce store for low-sodium meal delivery. It features a personalized meal recommendation system based on user health information. The store includes essential e-commerce functions like shopping cart, order processing, payment integration, and order management. It is built with React and uses Apollo Client for interacting with the GraphQL server.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/iamport-react-native-preview.png',
    },
    title: 'iamport-react-native',
    period: '2017',
    organization: 'PortOne (formerly Iamport, pre-merger)',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/iamport/iamport-react-native',
        isExternal: true,
      },
    ],
    description:
      'An open-source React Native SDK for Iamport. It allows easier payment integration for React Native apps by providing a WebView component.',
    pinned: false,
  },
  // https://github.com/iamport/iamport-react-native
  {
    preview: {
      imageUrl: 'https://hyukoo.one/iamport-analytics-preview.png',
      videoUrl: 'https://hyukoo.one/iamport-analytics-preview.mp4',
    },
    title: 'Iamport Analytics (now PortOne Analytics)',
    period: '2017 - 2018',
    organization: 'PortOne (formerly Iamport, pre-merger)',
    links: [
      {
        title: 'Website',
        url: 'https://portone.io/korea/en/service/analytics',
        isExternal: true,
      },
    ],
    description:
      'Iamport Analytics is a payment data analytics product. It is built with React, it uses Redux for state management and Apache ECharts for data visualization. The project focused on performance optimization, reducing component rendering and memoizing expensive visualization data to enhance user experience.',
    pinned: true,
  },
];

function SectionTitle({ children }: { children?: React.ReactNode }) {
  return (
    <div className="text-zinc-700 dark:text-zinc-300 font-semibold text-xl">
      {children}
    </div>
  );
}

export default async function Index() {
  return (
    <div>
      <Header />

      <main>
        <div className="w-full max-w-3xl mx-auto py-12 px-4">
          <Prose>
            {/* <Welcome /> */}
            <h1>Projects</h1>
            {/* <p>Projects I have worked on professionally and in my free time</p> */}

            <p>Here are some of the things I{`'`}ve been working on.</p>
          </Prose>

          <hr className="my-12" />

          <section>
            <div className="flex justify-between">
              <SectionTitle>Pinned</SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8">
              {projects
                .filter((project) => project.pinned)
                .map((project, index) => {
                  return (
                    <Item
                      preview={project.preview}
                      title={project.title}
                      period={project.period}
                      organization={project.organization}
                      links={project.links}
                      description={project.description}
                      key={index}
                    />
                  );
                })}
            </div>
          </section>

          <hr className="my-12" />

          <section>
            <div className="flex justify-between">
              <SectionTitle>More</SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8">
              {projects
                .filter((project) => !project.pinned)
                .map((project, index) => (
                  <Item
                    key={index}
                    preview={project.preview}
                    title={project.title}
                    period={project.period}
                    organization={project.organization}
                    links={project.links}
                    description={project.description}
                  />
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
