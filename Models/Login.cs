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
        [JsonProperty("user")]
        public string User { get; set; }

        [JsonProperty("pass")]
        public string Pass { get; set; }

        [JsonProperty("ip")]
        public string Ip { get; set; }

        [JsonProperty("login_date")]
        public DateTime Login_date { get; set; }

    }
}