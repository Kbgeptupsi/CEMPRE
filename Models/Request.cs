using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Request
    {
        [JsonProperty("skrequest")]
        [Key]
        public int SkRequest { get; set; }

        [JsonProperty("desc")]
        public string Desc { get; set; }

        [JsonProperty("answer")]
        public string Answer { get; set; }

        public Request_status FkRS { get; set; }
        
        [JsonProperty("fkstatus")]
        [ForeignKey("FkRS")]
        public string FkStatus { get; set; }

        public File FkFil { get; set; }

        [JsonProperty("fkfile")]
        [ForeignKey("FkFil")]
        public string FkFile { get; set; }

        public User FkUser { get; set; }

        [JsonProperty("fksender")]
        [ForeignKey("FkUser")]
        public string FkSender { get; set; }

        [JsonProperty("request_date")]
        public DateTime Request_date { get; set; }
    
    }
}