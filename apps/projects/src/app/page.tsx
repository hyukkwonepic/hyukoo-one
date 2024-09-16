import { Header } from 'ui';
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
    period: '2024',
    organization: 'Kiwiy',
    links: [
      {
        title: 'Website',
        url: 'https://dailyscrum.kiwiy.is/',
        isExternal: true,
      },
      {
        title: 'Github',
        url: 'https://github.com/kiwiy-is/dailyscrum',
        isExternal: true,
      },
    ],
    description:
      'A minimalist daily scrum board. Developed with Next.js. By leveraging React Server Components, most of the database querying and rendering is handled on the server side. It uses Supabase for PostgreSQL database management and real-time communication.',
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
        title: 'Github',
        url: 'https://github.com/hyukkwonepic/hyukoo-one',
        isExternal: true,
      },
    ],
    description: 'Details to be updated',
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
        title: 'Github',
        url: 'https://github.com/hyukkwonepic/poc-mfe-todo-app',
        isExternal: true,
      },
    ],
    description: 'Details to be updated',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/mm-easy-preview.png',
      videoUrl: 'https://hyukoo.one/mm-easy-preview.mp4',
    },
    title: 'MM Easy',
    period: '2024',
    organization: 'Team Sparta Coding Club',
    links: [
      {
        title: 'Website',
        url: 'https://www.mmeasy.kr/',
        isExternal: true,
      },
      {
        title: 'Github',
        url: 'https://github.com/mm-easy/mm-easy',
        isExternal: true,
      },
    ],
    description:
      'A Korean learning website with quizzes and games. This is a project I mentored. I helped students structure the architecture and choose a tech stack suitable for improving productivity. Built on Next.js, it handles and fetches data using Supabase and TanStack Query, and uses Jotai for state management.',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'https://hyukoo.one/dooray-preview.png',
      videoUrl: 'https://hyukoo.one/dooray-preview.mp4',
    },
    title: 'Dooray',
    period: '2021 - 2023',
    organization: 'NHN Dooray',
    links: [
      {
        title: 'Website',
        url: 'https://dooray.com/',
        isExternal: true,
      },
    ],
    description:
      'A collaboration platform including task management, messenger, video conferencing, and more. It consists of 12 services, 8 of which were rebuilt with React and managed inside a monorepo. Redux is used for state management and Redux Saga for complex async actions. Micro-Frontends architecture was applied for separate deployment.',
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
        url: 'https://dooray.com/',
        isExternal: true,
      },
    ],
    description:
      'A billing checkout and management website for Dooray. Architected to be extendable as a renewed admin console. Developed with Next.js, it partially adopted React Server Components to ensure secure server-client communication. The UI was built using an internal UI kit, with Storybook employed for visual testing.',
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
        title: 'Github',
        url: 'https://github.com/Green-Gables-Studio/kakapoly-store-hydrogen',
        isExternal: true,
      },
    ],
    description: 'Details to be updated',
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
    description: 'Details to be updated',
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
    description: 'Details to be updated',
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
        title: 'Github',
        url: 'https://github.com/seoulbitz/seoulbitz-client',
        isExternal: true,
      },
    ],
    description: 'Details to be updated',
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
    description: 'Details to be updated',
    pinned: false,
  },
  {
    preview: {
      imageUrl: 'http://hyukoo.one/iamport-analytics-preview.png',
      videoUrl: 'http://hyukoo.one/iamport-analytics-preview.mp4',
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
    description: 'Details to be updated',
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
        <div className="w-full max-w-3xl mx-auto py-10 px-4">
          <article className="prose dark:prose-invert prose-zinc-light  prose-headings:font-semibold prose-h1:text-3xl">
            {/* <Welcome /> */}
            <h1>Projects</h1>
            {/* <p>Projects I have worked on professionally and in my free time</p> */}

            <p>Here are some of the things I{`'`}ve been working on.</p>
          </article>

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
