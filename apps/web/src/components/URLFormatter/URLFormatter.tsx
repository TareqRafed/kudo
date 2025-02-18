'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import CopyButton from '../CopyButton/CopyButton';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { splitURL } from '@/util/helpers/url';

interface URLFormatterProps {
  url: string;
  showDomain?: boolean;
  showBasePath?: boolean;
  showQuery?: boolean;
}

export function URLFormatter({ url, showQuery, showDomain, showBasePath }: URLFormatterProps) {
  const formattedURL = splitURL(url);

  return (
    <div className="group h-[100px] max-w-full break-all font-mono">
      <div className="flex items-center justify-between">
        {showDomain && (
          <Link href={url} target="_blank" className={cn(['text-primary text-md', 'group-hover:underline'])}>
            {formattedURL.domain}
          </Link>
        )}
        <span>
          <Tooltip>
            <TooltipContent>Copy URL</TooltipContent>
            <TooltipTrigger asChild>
              <CopyButton copyValue={url} />
            </TooltipTrigger>
          </Tooltip>
        </span>
      </div>
      {formattedURL.basePath && showBasePath && (
        <Link
          href={url}
          target="_blank"
          className={cn([
            'w-[200px] text-sm overflow-hidden whitespace-nowrap text-ellipsis inline-block m-w-full',
            'group-hover:underline',
          ])}>
          /{formattedURL.basePath}
        </Link>
      )}
      {formattedURL.queryParams.length > 0 && showQuery && (
        <span className="text-xs text-muted-foreground">
          <span className="m-w-full inline-block w-[200px] truncate">
            <span>?</span>
            {formattedURL.queryParams.map((param, index) => (
              <span key={index}>
                {index > 0 && <span className="text-muted-foreground">&</span>}
                <span className="text-muted-foreground">{param.key}=</span>
                <span className="text-muted-foreground">{decodeURIComponent(param.value)}</span>
              </span>
            ))}
          </span>
        </span>
      )}
    </div>
  );
}
