export function Icon({ name, size = 16 }) {
  const paths = {
    home: <><path d="M4 10.5 12 4l8 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"/><path d="M9 20v-5h6v5"/></>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5 20c.8-3 3-4.5 7-4.5s6.2 1.5 7 4.5"/></>,
    github: <><path d="M8 21c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1.1.1-1.6-.5-2.2 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.7 8.6 4.4 4.4 0 0 0 18.6 5S17.5 4.7 15 6.4a12.3 12.3 0 0 0-6 0C6.5 4.7 5.4 5 5.4 5A4.4 4.4 0 0 0 5.3 8.6 4.7 4.7 0 0 0 4 12c0 4.7 2.8 5.7 5.5 6-.6.6-.6 1.3-.5 2.2V24"/></>,
    linkedin: <><path d="M6.5 9.5V19M6.5 5.5v.1"/><path d="M10.5 19v-5.3c0-3.5 6-3.8 6 0V19M10.5 12v7"/></>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 16h6"/></>, code: <><path d="m9 18-6-6 6-6M15 6l6 6-6 6M14 4l-4 16"/></>, arrow: <><path d="M7 17 17 7M9 7h8v8"/></>, mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>, close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
