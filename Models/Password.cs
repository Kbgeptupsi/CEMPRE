using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Password
    {
        public string Id { get; set; }
        public string Pass { get; set; }
    }
}