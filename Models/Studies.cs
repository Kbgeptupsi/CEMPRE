using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Studies
    {
        public int Id { get; set; }
        public Practiceer Pract { get; set; }
        public string Type { get; set; }
        public string Institution { get; set; }
        public string Title { get; set; }
        public DateTime Study_date { get; set; }
        public string Description { get; set; }
    }
}