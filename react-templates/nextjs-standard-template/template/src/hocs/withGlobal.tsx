import { useState } from "react";

/** 
 * @description these props will be injected to children component
 * @example
 * // in your component
 * import { type InjectedProps, withGlobal } from "@/hocs/withGlobal";
 * 
 * const YourComponent: React.FC<InjectedProps> = (props) => {
 *   const handleClick = () => {
 *     // set site name to `New Site` through `setSiteName` 
 *     // function from `withGlobal` HOC
 *     props.setSiteName("New Site");
 *   }
 * 
 *   return (
 *     <div>
 *       site name: {props.siteName}
 *       <button onClick={handleClick}>set site name to `New Site`</button>
 *     </div>
 *   );
 * };
 * 
 * export default withGlobal(YourComponent);
*/
export interface InjectedProps {
  /** site name */
  siteName: string;
  /** set site name */
  setSiteName: (siteName: string) => void;
}

// keyof InjectedProps === 'siteName' | 'setSiteName'

export function withGlobal<T extends InjectedProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof InjectedProps>) => {
    const [siteName, setSiteName] = useState<string>(
      "Next.js Standard Template"
    );

    return (
      <WrappedComponent
        {...(props as T)}
        siteName={siteName}
        setSiteName={setSiteName}
      />
    );
  };
}
