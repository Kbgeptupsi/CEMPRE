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
        [JsonProperty("nit")]
        [Key]
        public string Nit { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        public City FkCit { get; set; }

        [JsonProperty("fkcity")]
        [ForeignKey("FkCit")]
        public string FkCity { get; set; }

        public Department FkDpto { get; set; }

        [JsonProperty("fkdepartment")]
        [ForeignKey("FkDpto")]
        public string FkDepartment { get; set; }

        [JsonProperty("fkdirection")]
        public string Direction { get; set; }
        
        [JsonProperty("phone")]
        public string Phone { get; set; }

        [JsonProperty("desc")]
        public string Desc { get; set; }

        public Manager FkMan { get; set; }

        [JsonProperty("fkdirection")]
        [ForeignKey("FkMan")]
        public Manager FkManager { get; set; }

        public bool Acepted { get; set; }

        public bool Actived { get; set; }
    }
}