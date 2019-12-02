using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Program
    {
        [Key]
        public int SkProgram { get; set; }
        public string Name { get; set; }
    }
}