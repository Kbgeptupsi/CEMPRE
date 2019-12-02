using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Affinity
    {
        [JsonProperty("skaffinity")]
        [Key]
        public int SkAffinity { get; set; }
        
        public Company FkComp { get; set; }
        
        [JsonProperty("fkcompany")]
        [ForeignKey("FkComp")]
        public string FkCompany { get; set; }
        
        public Program FkProg { get; set; }
        
        [JsonProperty("fkprogram")]
        [ForeignKey("FkProg")]
        public int FkProgram { get; set; }
    }
}