import {Feature} from "@/types";
import {useState} from "react";
import {Link} from "@inertiajs/react";
import FeatureActionsDropdown from "@/Components/FeatureActionsDropdown";

export default function FeatureItem({feature}: {feature: Feature}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
        <div className="flex flex-col items-center">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor" className="size-12">
              <path fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clipRule="evenodd"/>
            </svg>
          </button>
          <span className="text-2xl font-semibold">
            12
          </span>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor" className="size-12">
              <path fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"/>
            </svg>

          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl mb-2">
            <Link href={route('feature.show', feature)}>
              {feature.name}
            </Link>
          </h2>
          {(feature.description || '').length > 200 && (
            <>
              <p>{isExpanded ? feature.description : `${(feature.description || '').slice(0, 200)}...`}</p>

              <button onClick={toggleReadMore} className="text-amber-500 hover:underline">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </>
          )}
          {(feature.description || '').length <= 200 && (
            <p>{feature.description}</p>
          )}
        </div>
        <div>
          <FeatureActionsDropdown feature={feature} />
        </div>
      </div>
    </div>
  );
}
