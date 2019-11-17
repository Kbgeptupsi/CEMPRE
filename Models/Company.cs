using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Company
    {
        public string Nit { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Dpto { get; set; }
        public string Direction { get; set; }
        public string Phone { get; set; }
        public string Desc { get; set; }
        public Manager Rep { get; set; }
        public List<Program> Programs { get; set; }
    }
}