using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Manager
    {
        [JsonProperty("id")]
        [Key]
        public string Id { get; set; }

        [JsonProperty("firts_name")]
        public string Firts_name { get; set; }
        
        [JsonProperty("last_name")]
        public string Last_name { get; set; }
        
        public City FkCit { get; set; }

        [JsonProperty("fkciudad")]
        [ForeignKey("FkCit")]
        public string FkCity { get; set; }
        
        public Department FkDpto { get; set; }

        [JsonProperty("fkdepartment")]
        [ForeignKey("FkDpto")]
        public string FkDepartment { get; set; }
        
        [JsonProperty("direction")]
        public string Direction { get; set; }
       
        public Company FkCom { get; set; }

        [JsonProperty("fkcompany")]
        [ForeignKey("FkCom")]
        public Company FkCompany { get; set; }
        
        [JsonProperty("phone")]
        public string Phone { get; set; }
        
        [JsonProperty("born_date")]
        public DateTime Born_date { get; set; }
        
        public Sex FkSe { get; set; }

        [JsonProperty("fksex")]
        [ForeignKey("FkSe")]
        public string FkSex { get; set; }
        
        public File FkFil { get; set; }

        [JsonProperty("fkfile")]
        [ForeignKey("FkFil")]
        public string FkFile { get; set; }

    }
}