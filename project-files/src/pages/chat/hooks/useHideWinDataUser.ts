export const useHideWinDataUser = (ref: React.MutableRefObject<HTMLDivElement | null> | null, handle: any) => {
    const hideWinDataUser = (e: MouseEvent | TouchEvent) => {

        if (ref === null) {
            return;
        };

        const classClickItem = (e.target as HTMLElement).className;
        const classWrapperDiv = (ref.current as HTMLDivElement).className;

        if (classWrapperDiv !== classClickItem) {
            return;
        };

        handle();
    };
    return { hideWinDataUser }
};