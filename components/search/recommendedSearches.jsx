export default function RecommendedSearches({searchedRecommended}){
  return(
    <div className="modal-btncontainer py-3">
      <h2 className="text-xl mb-5 font-light text-caption">What Others Are Looking For - </h2>
      <div className="flex flex-wrap gap-4">
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Single Sign-On")}>Single Sign-On</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Identity and Access Management (IAM)")}>Identity and Access Management (IAM)</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Two Factor Authentication")}>Two Factor Authentication</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Multi Factor Authentication")}>Multi Factor Authentication</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Atlassian SAML SSO")}>Atlassian SAML SSO</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Automated User Provisioning")}>Automated User Provisioning</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("User Management")}>User Management</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("Identity Brokering")}>Identity Brokering</span>
        <span className="rounded-md bg-slate-50 text-md px-3 py-2 font-medium text-caption cursor-pointer ring-1 ring-inset ring-slate-500/10" onClick={() => searchedRecommended("WordPress 2FA/MFA")}>WordPress 2FA/MFA</span>
      </div>
    </div>
  );
}