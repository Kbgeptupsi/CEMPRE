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
        public string Id { get; set; }
        public Practiceer Pract { get; set; }
        public Company Com { get; set; }
        public Teacher Teach { get; set; }
        public bool Success { get; set; }
        public string State { get; set; }
        public double Global_rating { get; set; }
        public DateTime Start_date { get; set; }
        public DateTime End_date { get; set; }
        public int Faults { get; set; }
    }
}