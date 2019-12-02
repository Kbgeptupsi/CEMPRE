using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Study
    {
        [JsonProperty("sktype")]
        public int SkStudy { get; set; }
        
        public Practiceer FkPract { get; set; }
        
        [JsonProperty("fkpracticeer")]
        [ForeignKey("FkPract")]        
        public string FkPracticeer { get; set; }
        
        public Study_type FkST { get; set; }
        
        [JsonProperty("fktype")]
        [ForeignKey("FkST")]
        public string FkType { get; set; }
        
        [JsonProperty("institution")]
        public string Institution { get; set; }
        
        [JsonProperty("title")]
        public string Title { get; set; }
        
        [JsonProperty("study_date")]
        public DateTime Study_date { get; set; }
        
        [JsonProperty("desc")]
        public string Desc { get; set; }
    
    }
}