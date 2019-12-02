using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Connect
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int SkConnect { get; set; }

        public User FkUs { get; set; }

        [JsonProperty("fkuser")]
        [ForeignKey("FkUs")]
        public string FkUser { get; set; }

        [JsonProperty("ip")]
        public string Ip { get; set; }

        [JsonProperty("dateconnection")]
        public DateTime DateConnection { get; set; }
    
        [JsonProperty("mac")]
        public string mac { get; set; }
    }
}