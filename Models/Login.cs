using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Login
    {
        public string User { get; set; }
        public string Pass { get; set; }
        public string Ip { get; set; }
        public DateTime Login_date { get; set; }

    }
}