export const router = $state({
    path: window.location.pathname,
    navigate(to: string) {
        window.history.pushState({}, '', to);
        this.path = to;
    }
});

window.addEventListener('popstate', () => {
    router.path = window.location.pathname;
});
