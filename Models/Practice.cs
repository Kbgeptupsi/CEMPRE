using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Practice
    {
        [Key]
        public int SkPractice { get; set; }
        
        public Practiceer FkPract { get; set; }

        [JsonProperty("fkpracticeer")]
        [ForeignKey("FkPract")]
        public string FkPracticeer { get; set; }

        public Company FkCom { get; set; }

        [JsonProperty("fkcompany")]
        [ForeignKey("FkCom")]
        public string FkCompany { get; set; }

        public Teacher FkTeach { get; set; }
   
        [JsonProperty("fkteacher")]
        [ForeignKey("FkTeach")]    
        public string FkTeacher { get; set; }
        
        [JsonProperty("sucess")]
        public bool Success { get; set; }

        public Practice_status FkPS { get; set; }

        [JsonProperty("state")]
        [ForeignKey("FkPS")] 
        public string State { get; set; }

        [JsonProperty("global_rating")]
        public double Global_rating { get; set; }
        
        [JsonProperty("start")]
        public DateTime Start { get; set; }
        
        [JsonProperty("end")]
        public DateTime End { get; set; }
        
        [JsonProperty("faults")]
        public int Faults { get; set; }

    }
}