import React from "react";


export type DelayerReactProps = {
    // working: React.RefObject<boolean>;
    // timeout: React.RefObject<ReturnType<typeof setTimeout> | null>;
  working: React.RefObject<any>;
  timeout: React.RefObject<any>;
  time: number;
  func?: () => void;
};

export function delayer_react(props: DelayerReactProps){
    const {working, timeout, time, func} = props

    if(working.current){
        clearTimeout(timeout.current)
        working.current = false
    }
    
    working.current = true
    
    timeout.current = setTimeout(() => {
        if(func) func()
        working.current = false
    }, time||500);
}