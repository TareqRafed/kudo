import { ComponentPropsWithoutRef } from 'react';
import { Button } from '../ui/button';
import Script from 'next/script';

interface Props extends ComponentPropsWithoutRef<typeof Button> {}

export default function CalButton({ ...rest }: Props) {
  return (
    <>
      {/* Script to load the Cal.com embed on the client */}
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://cal.com"});

  Cal.ns["30min"]("ui", {"styles":{"branding":{"brandColor":"#1B73E9"}},"hideEventTypeDetails":false,"layout":"month_view"});
					`,
        }}
      />
      {/* The button that triggers the calendar pop-up */}
      <Button
        data-cal-namespace="30min"
        data-cal-link="mersal/30min"
        data-cal-config='{"layout":"month_view", "theme":"auto"}'
        {...rest}
      />
    </>
  );
}
