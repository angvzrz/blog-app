import { BackButton } from '@/app/components/BackButton';
import { ButtonAction } from '@/app/components/ButtonAction';

export default function BlogDetailsPage() {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
      </div>
      <p className="text-slate-700">Post one content</p>
      <ButtonAction />
    </div>
  );
}
