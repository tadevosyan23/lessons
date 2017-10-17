using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tatev_Travel.Startup))]
namespace Tatev_Travel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
