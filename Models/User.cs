using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CEMPRE.Models
{
    public class User
    {
        [JsonProperty("skuser")]
        [Key]
        public int SkUser { get; set; }
    
        [JsonProperty("id")]
        public string Id { get; set; }

        public Rol FkRo { get; set; }

        [JsonProperty("rol")]
        [ForeignKey("FkRo")]
        public string Table { get; set; }

        [JsonProperty("pass")]
        public string Pass { get; set; }
    
    }
}