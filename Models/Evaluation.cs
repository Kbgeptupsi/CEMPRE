using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CEMPRE.Models
{
    public class Evaluation
    {
        [JsonProperty("skevaluation")]
        [Key]
        public int SkEvaluation { get; set; }

        public Company FkCom { get; set; }
        
        [JsonProperty("fkcompany")]
        [ForeignKey("FkCom")]
        public string FkCompany { get; set; }

        public Practice FkPrac { get; set; }

        [JsonProperty("fkpractice")]
        [ForeignKey("FkPrac")]
        public int FkPractice { get; set; }

        [JsonProperty("date_rating")]
        public DateTime Date_rating { get; set; }

        [JsonProperty("rating")]
        public int Rating { get; set; }

        [JsonProperty("desc")]
        public string Desc { get; set; }
    }
}