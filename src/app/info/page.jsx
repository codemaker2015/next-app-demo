import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h3>This is a handson on next.js 13 features.</h3>
      <hr />
      <h4>
        Next.js 13.1 includes improvements to both the pages/ (stable) and app/
        (beta) directories:
      </h4>
      <ul>
        <li>
          app Directory (Beta) Improvements: Improved reliability and
          performance.
        </li>
        <li>
          Built-in Module Transpilation: Bringing next-transpile-modules
          capabilities into core.
        </li>
        <li>Edge Runtime (Stable): A light Node.js runtime for the Edge.</li>
        <li>
          Turbopack Updates: Support for Tailwind CSS, next/image, @next/font,
          and more.
        </li>
        <li>
          Middleware Improvements: Return responses and set request headers.
        </li>
        <li>
          SWC Import Resolution: For smaller JavaScript bundles when using
          barrel files.
        </li>
        <li>Memory usage improvements, new templates, and more!</li>
      </ul>
      <p>
        For more: <a href="https://nextjs.org/blog/next-13-1">Next.js 13.1</a>
      </p>
      <p>
        return to <Link href="/">main page</Link>
      </p>
    </div>
  );
}
