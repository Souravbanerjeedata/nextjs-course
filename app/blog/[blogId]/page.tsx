interface BlogIdPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogIdPage({ params }: BlogIdPageProps) {
  const { blogId } = await params;
  return (
    <div>
      <h1>BlogIdPage</h1>
      <p>{blogId}</p>
    </div>
  );
}
