using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class File
    {
        [JsonProperty("skfile")]
        [Key]
        public int SkFile { get; set; }
        
        public User FkUp { get; set; }

        [ForeignKey("FkUp")]
        [JsonProperty("skuploader")]
        public string FkUploader { get; set; }
        
        [JsonProperty("location")]
        public string Location { get; set; }
        
        [JsonProperty("type")]
        public string Type { get; set; }
        
        [JsonProperty("size")]
        public string Size { get; set; }
        
        [JsonProperty("upload_date")]
        public DateTime Upload_date { get; set; }
    }
}