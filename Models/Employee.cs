using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Employee
    {
        [JsonProperty("id")]
        [Key]
        public string Id { get; set; }
        
        [JsonProperty("firts_name")]
        public string Firts_name { get; set; }
        
        [JsonProperty("last_name")]
        public string Last_name { get; set; }
        
        [JsonProperty("direction")]
        public string Direction { get; set; }
        
        [JsonProperty("phone")]
        public string Phone { get; set; }
        
        [JsonProperty("born_date")]
        public DateTime Born_date { get; set; }
        
        public Sex FkSe { get; set; }

        [JsonProperty("fksex")]
        [ForeignKey("FkSex")]
        public string FkSex { get; set; }
        
        public Position FkPos { get; set; }

        [JsonProperty("fkposition")]
        [ForeignKey("FkPos")]
        public string Position { get; set; }
        
        [JsonProperty("type")]
        public string Type { get; set; }

        public bool Actived { get; set; }

    }
}