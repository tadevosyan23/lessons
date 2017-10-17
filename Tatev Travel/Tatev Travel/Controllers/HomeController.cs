﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tatev_Travel.Controllers
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
        public ActionResult DailyTours()
        {
            ViewBag.Message = "Daily Tours.";

            return View();
        }
        public ActionResult ClassicTours()
        {
            ViewBag.Message = "Classic Tours.";

            return View();
        }


    }
}