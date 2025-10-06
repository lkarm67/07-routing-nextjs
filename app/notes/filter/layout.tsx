type NotesFilterLayoutProps = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
};
export default function NotesFilterLayout({ children, sidebar }: NotesFilterLayoutProps) {
    return (
        <section>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>
    );
}
