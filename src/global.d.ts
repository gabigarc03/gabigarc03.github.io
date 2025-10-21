/**
 * Register custom components here!
 */

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
      'tech-card': { 
        href: string,
        image: string,
        onMouseOver?: () => void,
        children: ComponentChildren
      },
    }
  }
}

// This empty export is important! It tells TS to treat this as a module
export {};