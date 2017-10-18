using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dixon_Walther.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Articles()
        {
            ViewBag.Message = "Articles";

            return View();
        }

        public ActionResult Promotions()
        {
            ViewBag.Message = "Promotions";

            return View();
        }
    }
}