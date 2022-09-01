export function createScrollStopListener(element:HTMLElement, callback: (...args: any[]) => any, timeout:any): any{
    let removed = false;
    let handle: any = null;
    const onScroll = () => {
        if (handle) {
             clearTimeout(handle);
        }
        handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener('scroll', onScroll);
    return () => {
        if (removed) {
            return;
        }
        removed = true;
      	if (handle) {
      		clearTimeout(handle);
        }
    	element.removeEventListener('scroll', onScroll);
    };
}