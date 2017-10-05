using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dixon_Walther.Startup))]
namespace Dixon_Walther
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
