using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Teacher
    {
        [JsonProperty("id")]
        [Key]
        public string Id { get; set; }
        
        [JsonProperty("firts_name")]
        public string Firts_name { get; set; }
        
        [JsonProperty("last_name")]
        public string Last_name { get; set; }
        
        public City FkCit { get; set; }

        [JsonProperty("fkcity")]
        [ForeignKey("FkCit")]
        public int FkCity { get; set; }
        
        public Department FkDpto { get; set; }
        
        [JsonProperty("fkdepartment")]
        [ForeignKey("FkDpto")]
        public int FkDepartment { get; set; }
        
        [JsonProperty("direction")]
        public string Direction { get; set; }
        
        [JsonProperty("phone")]
        public string Phone { get; set; }
        
        [JsonProperty("born_date")]
        public DateTime Born_date { get; set; }
        
        public Sex FkSe { get; set; }

        [JsonProperty("fksex")]
        [ForeignKey("FkSe")]
        public int FkSex { get; set; }
        
        public Program FkProg { get; set; }

        [JsonProperty("program")]
        [ForeignKey("FkProg")]
        public int FkProgram { get; set; }
        
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("actived")]
        public bool Actived { get; set; }
        
        [JsonProperty("acepted")]
        public bool Acepted { get; set; }
    
    }
}