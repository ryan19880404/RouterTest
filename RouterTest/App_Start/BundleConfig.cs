using System.Web;
using System.Web.Optimization;

namespace RouterTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/site").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/blue-bird.js",
                "~/Scripts/knockout-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/api-model").Include(
                "~/Scripts/api.model.js"));
            bundles.Add(new ScriptBundle("~/bundles/router-model").Include(
                "~/Scripts/router.model/router.*",
                "~/Scripts/router.model.js"));
            bundles.Add(new ScriptBundle("~/bundles/page-model").Include(
                "~/Scripts/page.model/page.model.*",
                "~/Scripts/page.model.js",
                "~/Scripts/site.js"));
        }
    }
}
