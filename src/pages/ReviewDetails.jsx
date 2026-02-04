import { useParams } from "react-router-dom";

export default function ReviewDetails() {
  const { id } = useParams();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const review = reviews.find(r => r.id == id);

  if (!review) {
    return <p className="py-24 text-center text-gray-500">Review not found.</p>;
  }

  return (
    <section className="max-w-3xl mx-auto py-24">
      <h2 className="text-2xl font-bold mb-4">{review.name}</h2>
      <p className="text-gray-400">{review.message}</p>
    </section>
  );
}
