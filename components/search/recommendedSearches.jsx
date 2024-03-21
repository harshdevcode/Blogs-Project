export default function RecommendedSearches({searchedRecommended}){
  return(
    <div className="modal-btncontainer p-5 sm:p-8">
      <h2 className="text-xl mb-5 font-light text-caption">What Others Are Looking For - </h2>
      <div className="flex flex-wrap gap-4">
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Single Sign-On (SSO)")}>Single Sign-On (SSO)</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Identity and Access Management (IAM)")}>Identity and Access Management (IAM)</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Atlassian")}>Atlassian</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("WordPress")}>WordPress</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Multi-Factor Authentication (MFA)")}>Multi-Factor Authentication (MFA)</span>
      </div>
    </div>
  );
}