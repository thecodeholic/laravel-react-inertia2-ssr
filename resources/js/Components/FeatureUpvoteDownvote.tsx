import {Feature} from "@/types";
import {useForm} from "@inertiajs/react";

export default function FeatureUpvoteDownvote({feature}: {feature: Feature}) {
  const upvoteForm = useForm({
    upvote: true
  });

  const downvoteForm = useForm({
    upvote: false
  });

  const upvoteDownvote = (upvote: boolean) => {
    if (feature.user_has_upvoted && upvote || feature.user_has_downvoted && !upvote) {
      upvoteForm.delete(route('upvote.destroy', feature.id), {
        preserveScroll: true
      });
    } else {
      let form = null;
      if (upvote) {
        form = upvoteForm;
      } else {
        form = downvoteForm;
      }

      form.post(route('upvote.store', feature.id), {
        preserveScroll: true
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => upvoteDownvote(true)} className={feature.user_has_upvoted ? 'text-amber-600' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor" className="size-12">
          <path fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"/>
        </svg>
      </button>
      <span className={'text-2xl font-semibold ' +
        (feature.user_has_upvoted || feature.user_has_downvoted ? 'text-amber-600' : '')}>
            {feature.upvote_count}
          </span>
      <button onClick={() => upvoteDownvote(false)} className={feature.user_has_downvoted ? 'text-amber-600' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor" className="size-12">
          <path fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"/>
        </svg>

      </button>
    </div>
  )
}
