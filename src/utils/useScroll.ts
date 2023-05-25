const useScroll = () => {
    const handleScrollTo = (sectionId: string, top = 160) => {
        const section: HTMLElement = document.getElementById(sectionId) as HTMLElement
        console.log(section.offsetTop)
        window.scrollTo({
            top: section.offsetTop - top,
            behavior: 'smooth'
        })
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
        handleScrollTo,
        scrollToTop
    }
}

export default useScroll
