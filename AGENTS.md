<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Landing page retheme workflow

When the user asks to replace, retheme, or transform an existing landing page into a new project or brand theme, treat the request as a complete landing page adaptation unless the user explicitly narrows the scope.

- Create a dedicated component folder at `src/components/<project>/`.
- Split the page into project-specific components such as `header.tsx`, `hero-section.tsx`, explanatory sections, and `footer.tsx`. Add optional sections only when they fit the content and positioning of that project. A closing section is not mandatory.
- Add a project-specific `fonts.ts` and use its display and text fonts throughout the new components.
- Use the images supplied by the user from the indicated `public/images/<project>/` folder. Review the available assets and incorporate them intentionally into the page.
- Build an original visual identity for the project. Do not merely swap text, colors, and images inside the previous page structure. Adapt composition, section rhythm, hierarchy, transitions, responsive behavior, and subtle interactions to the new brand.
- Create a unique header for the project. Include a usable mobile hamburger menu when appropriate.
- Create a unique footer for the project. Include the `Oferecido por MAGUI.studio` attribution and a `Voltar ao topo` link following the established portfolio pattern.
- Keep calls to action coherent with the project goal and connect them to the appropriate destination, such as WhatsApp or an internal section anchor.
- Preserve existing repository conventions and keep as many components server-rendered as possible. Introduce `"use client"` only where interaction or animation requires it.
- Validate responsive layout, links, image loading, and visual transitions after implementation.
