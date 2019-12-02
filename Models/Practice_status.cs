using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CEMPRE.Models
{
    public class Practice_status
    {
        [Key]
        public int SkStatus { get; set; }

        public string Desc { get; set; }

    }
}