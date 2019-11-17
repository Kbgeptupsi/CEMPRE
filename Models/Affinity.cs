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
        public string Id { get; set; }
        public Company Com { get; set; }
        public Program Prog { get; set; }
    }
}