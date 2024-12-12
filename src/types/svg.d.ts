declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FuncitonComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
