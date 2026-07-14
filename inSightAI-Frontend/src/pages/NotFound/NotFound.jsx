import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";

import Card from "../../components/common/Card";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex min-h-[75vh] items-center justify-center px-6">
        <Card
          hover={false}
          className="max-w-xl text-center"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10">
            <SearchX
              size={48}
              className="text-violet-500"
            />
          </div>

          <h1 className="text-6xl font-bold text-main">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-main">
            Page Not Found
          </h2>

          <p className="mt-3 text-secondary">
            The page you're looking for doesn't
            exist or has been moved.
          </p>

          <div className="mt-8">
            <Link to="/dashboard">
              <PrimaryButton>
                Back to Dashboard
              </PrimaryButton>
            </Link>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}