import { ExternalLink, Link2 } from 'lucide-react';
import MediaPreview from '../media-preview';
import { Project } from './page';
import { linkStyles } from 'ui';

type ItemProps = Omit<Project, 'pinned'>;

function Item({
  preview,
  title,
  period,
  organization,
  links,
  description,
}: ItemProps) {
  return (
    <div className="space-y-4 text-zinc-700 dark:text-zinc-300 ">
      {preview && (
        <MediaPreview
          image={{
            url: preview.imageUrl,
            alt: '',
          }}
          video={preview.videoUrl ? { url: preview.videoUrl } : undefined}
        />
      )}
      <div className="space-y-2">
        <div className="font-semibold text-lg">{title}</div>
        <p>
          <span>{period}</span> | <span>{organization}</span>{' '}
        </p>

        <div className="space-x-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className={linkStyles()}
              {...(link.isExternal && {
                rel: 'noreferrer',
                target: '_blank',
              })}
            >
              <span>{link.title}</span>
              {link.isExternal && (
                <span className="ml-1">
                  <ExternalLink size={16} />
                </span>
              )}
            </a>
          ))}
        </div>

        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default Item;
