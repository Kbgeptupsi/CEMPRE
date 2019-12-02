using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CEMPRE.Models
{
    public class Ratings
    {
        [JsonProperty("skrating")]
        [Key]
        public int SkRating { get; set; }

        public Practiceer FkPrac { get; set; }

        [JsonProperty("fkpracticeer")]
        [ForeignKey("FkPrac")]
        public int FkPracticeer { get; set; }

        public Teacher FkTea { get; set; }

        [JsonProperty("fkteacher")]
        [ForeignKey("FkTea")]
        public int FkTeacher { get; set; }

        [JsonProperty("rating")]
        public int Rating { get; set; }

        public File FkFil { get; set; }

        [JsonProperty("fkfile")]
        [ForeignKey("FkFil")]
        public int FkFile { get; set; }

        [JsonProperty("rating_date")]
        public DateTime Rating_date { get; set; }

        public Practice FkPract { get; set; }

        [JsonProperty("fkpractice")]
        [ForeignKey("FkPract")]
        public int FkPractice { get; set; }

        public Work FkWor { get; set; }

        [JsonProperty("fkwork")]
        [ForeignKey("FkWor")]
        public int FkWork { get; set; }

    }
}